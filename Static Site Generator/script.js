
const pages = [
    {
      title: "Home",
      content: "Welcome to my site!"
    },
    {
      title: "About",
      content: "My name is Kennedy Maina Gichina. I am a Web developer I have certifications in Web development fundamentals, Web design, Javascript theory and practical understaning."
    },
    {
      title: "Contact",
      content: "Get in touch with me at kennedygichina0@gmail.com"
    }
  ];
  
  function generateMenu() {
    const menu = document.getElementById("menu");
    pages.forEach(page => {
      const item = document.createElement("a");
      item.href = "#";
      item.innerHTML = page.title;
      item.addEventListener("click", event => {
        event.preventDefault();
        generateContent(page.content);
      });
      menu.appendChild(item);
    });
  }
  
  function generateContent(content) {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = content;
  }
  
  document.addEventListener("DOMContentLoaded", generateMenu);
  