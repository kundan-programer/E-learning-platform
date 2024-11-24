const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");

const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const contactBtn = document.getElementById("contactBtn");
const demoBtn = document.getElementById("demoBtn");

const homePage = document.querySelector(".home-page");
const aboutPage = document.querySelector(".about-page");
const contactPage = document.querySelector(".contact-page");
const demoPage = document.querySelector(".demo-page");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

homeBtn.addEventListener("click", () => {
  showPage(homePage);
  navLinks.classList.remove("active");
});

aboutBtn.addEventListener("click", () => {
  showPage(aboutPage);
  navLinks.classList.remove("active");
});

contactBtn.addEventListener("click", () => {
  showPage(contactPage);
  navLinks.classList.remove("active");
});

demoBtn.addEventListener("click", () => {
  showPage(demoPage);
  navLinks.classList.remove("active");
});

function showPage(page) {
  homePage.style.display = "none";
  aboutPage.style.display = "none";
  contactPage.style.display = "none";
  demoPage.style.display = "none";
  page.style.display = "block";
}

// --------------------------------------------------------------------
// for the serch button
const videos = [
  {
    title: "Software Engineering Placement 2025",
    url: "https://www.youtube.com/embed/p2j6Wq57MEE",
  },
  {
    title: "Bubble Sort Algorithm",
    url: "https://www.youtube.com/embed/F5MZyqRp_IM",
  },
  {
    title: "Improve English Speaking Interviews",
    url: "https://www.youtube.com/embed/icudf_w_pqU",
  },
  {
    title: "Matrices | Engineering Maths",
    url: "https://www.youtube.com/embed/RtuNwdHDEAw",
  },
  {
    title: "Engineering Graphics Syllabus",
    url: "https://www.youtube.com/embed/s4P7rQnaSIY",
  },
  {
    title: "Quantum Physics",
    url: "https://www.youtube.com/embed/mDh7KWFBPXQ",
  },
  {
    title: "How to Score More in College Exams",
    url: "https://www.youtube.com/embed/lCTh5iCTBec",
  },
  {
    title: "How to Score 8+ CGPA",
    url: "https://www.youtube.com/embed/YOwOIEotgjc",
  },
  {
    title: "21 Days Challenge for Success",
    url: "https://www.youtube.com/embed/JmOBM160jZ0",
  },
  {
    title: "Strongest Comeback in 6 Months",
    url: "https://www.youtube.com/embed/BRQbdVQ4DN8",
  },
  {
    title: "GATE 2025 Important Update",
    url: "https://www.youtube.com/embed/YJwkmNTlQ-4",
  },
  {
    title: "CAT 2024 Admit Card",
    url: "https://www.youtube.com/embed/pDEOOF5BsY0",
  },
];
document.getElementById("logoutBtn").addEventListener("click", () => {
  // Clear user data from local storage or session storage
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userPassword");

  // Redirect to the login page
  window.location.href = "login.html";
});

// Function to search videos
function searchVideos() {
  const videoname = document
    .getElementById("videoSearchInput")
    .value.toLowerCase();
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(videoname)
  );
  displayVideos(filteredVideos);
}

// Function to display videos in the HTML
function displayVideos(data) {
  const imagesDiv = document.getElementById("images");
  imagesDiv.innerHTML = ""; // Clear previous results

  if (data.length === 0) {
    imagesDiv.innerHTML = "<p>No videos found.</p>";
    return;
  }

  data.forEach((video) => {
    const videoItem = document.createElement("div");
    videoItem.classList.add("video-item");
    videoItem.innerHTML = `
      <h3>${video.title}</h3>
      <iframe width="0%" height="260" src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
    imagesDiv.appendChild(videoItem);
  });
}

// Initialize display with all videos on page load
window.onload = function () {
  displayVideos(videos);
};
