const bookingEmail = "ugwuegbuprosper4@gmail.com";

const services = [
  { id:"haircut", name:"Haircut", category:"hair", price:5000, description:"A tailored cut, from classic shapes to modern fades.", image:"https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=720&q=80", alt:"Barber carefully shaping a haircut" },
  { id:"hair-trim", name:"Hair trimming", category:"hair", price:3000, description:"Keep your current shape neat and well-maintained.", image:"https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=720&q=80", alt:"Barber working with clippers" },
  { id:"beard-trim", name:"Beard trimming", category:"beard", price:2500, description:"A balanced, tidy beard with a shape that suits you.", image:"https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=720&q=80", alt:"Close detail of professional barbering" },
  { id:"beard-line", name:"Beard lining", category:"beard", price:2000, description:"Defined cheek, jaw and neckline edges.", image:"https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=720&q=80", alt:"Barber tools prepared for precision grooming" },
  { id:"dye-tint", name:"Hair dyeing & tinting", category:"hair", price:8000, description:"Colour refreshes and expressive shades for your look.", image:"https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=720&q=80", alt:"Haircut inspiration in a barbershop" },
  { id:"styling", name:"Hair styling & grooming", category:"hair", price:4000, description:"Finish and style your hair for everyday or an occasion.", image:"https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=720&q=80", alt:"Styling work in progress" },
  { id:"relaxing", name:"Hair relaxing", category:"hair", price:7000, description:"A texture-changing service with care and consultation.", image:"https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=720&q=80", alt:"Barber shop service setting" },
  { id:"treatment", name:"Hair treatment", category:"hair", price:6000, description:"A care session chosen for your hair and scalp needs.", image:"https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=720&q=80", alt:"Clean grooming tools" },
  { id:"twisting", name:"Hair twisting", category:"hair", price:8000, description:"Twists shaped with attention to length and texture.", image:"https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=720&q=80", alt:"Hair detail inspiration" },
  { id:"facial-cleanse", name:"Facial cleansing", category:"face", price:5000, description:"A refreshing cleanse to remove everyday build-up.", image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=720&q=80", alt:"Facial skincare treatment" },
  { id:"facial-scrub", name:"Facial scrubbing", category:"face", price:4000, description:"A gentle exfoliation suited to your skin's needs.", image:"https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=720&q=80", alt:"Skincare treatment in progress" },
  { id:"blackhead", name:"Blackhead removal", category:"face", price:5000, description:"Targeted care to help clear congested-looking pores.", image:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=720&q=80", alt:"Professional skincare session" },
  { id:"face-mask", name:"Face mask treatment", category:"face", price:5000, description:"A mask selected to complement your skin-care routine.", image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=720&q=80", alt:"Facial mask and skincare" },
  { id:"after-shave", name:"After-shave application", category:"face", price:1500, description:"A clean finishing touch after your shave or beard line-up.", image:"https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=720&q=80", alt:"Barber grooming products and tools" },
  { id:"hairline", name:"Hairline enhancement", category:"beard", price:3000, description:"A carefully defined hairline for a sharper finish.", image:"https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=720&q=80", alt:"Precision hairline work" },
  { id:"home-service", name:"Home service", category:"vip", price:20000, description:"A barber visit at your chosen location; travel may affect price.", image:"https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=720&q=80", alt:"Professional barber at work" },
  { id:"vip-cut", name:"VIP haircut service", category:"vip", price:15000, description:"A more personal appointment with extra time for the details.", image:"https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=720&q=80", alt:"Careful haircut service" },
  { id:"appointment-cut", name:"Appointment-based haircut", category:"vip", price:8000, description:"Reserve a preferred time and plan your visit in advance.", image:"https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=720&q=80", alt:"Barber tools ready for an appointment" },
  { id:"groom-bridal", name:"Bridal / groom grooming", category:"vip", price:25000, description:"Grooming for a wedding day or other important occasion.", image:"https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=720&q=80", alt:"Barber preparing a client for a fresh look" },
  { id:"group-package", name:"Group haircut package", category:"vip", price:18000, description:"Coordinate cuts for friends or a group; final price depends on headcount.", image:"https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=720&q=80", alt:"Barber at work" },
  { id:"event-groom", name:"Event grooming", category:"vip", price:25000, description:"Plan grooming for a celebration, shoot or special event.", image:"https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=720&q=80", alt:"Professional grooming service" }
];

const naira = value => new Intl.NumberFormat("en-NG", { style:"currency", currency:"NGN", maximumFractionDigits:0 }).format(value);
const grid = document.getElementById("service-grid");
const serviceSelect = document.getElementById("selected-service");
const count = document.getElementById("menu-count");

function renderServices(filter = "all") {
  const visible = services.filter(service => filter === "all" || service.category === filter);
  if (!grid) return;
  grid.innerHTML = visible.map((service, index) => `
    <article class="service-item">
      <div class="service-image">
        <img src="${service.image}" alt="${service.alt}" loading="lazy" width="720" height="520">
        <span class="service-index">${String(services.indexOf(service) + 1).padStart(2, "0")} / ${service.category.toUpperCase()}</span>
      </div>
      <div class="service-info">
        <div class="service-meta"><h3>${service.name}</h3><span class="service-price">${naira(service.price)}</span></div>
        <p>${service.description}</p>
        <a class="service-book" href="booking.html?service=${service.id}" data-book-service="${service.id}">Book this service <span aria-hidden="true">↗</span></a>
      </div>
    </article>`).join("");
  count.textContent = `${visible.length} SERVICE${visible.length === 1 ? "" : "S"}`;
}

function populateServiceSelect() {
  if (!serviceSelect) return;
  services.forEach(service => {
    const option = document.createElement("option");
    option.value = service.id;
    option.textContent = `${service.name} — ${naira(service.price)}`;
    serviceSelect.appendChild(option);
  });
}

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderServices(button.dataset.filter);
  });
});

document.addEventListener("click", event => {
  const link = event.target.closest("[data-book-service]");
  if (!link) return;
  const serviceId = link.dataset.bookService;
  if (serviceSelect) serviceSelect.value = serviceId;
  const feedback = document.getElementById("form-feedback");
  if (feedback) feedback.textContent = `${services.find(s => s.id === serviceId).name} selected. Complete the form to prepare your request.`;
});

const form = document.getElementById("booking-form");
const dateInput = document.getElementById("booking-date");
const localToday = new Date();
if (dateInput) dateInput.min = `${localToday.getFullYear()}-${String(localToday.getMonth()+1).padStart(2,"0")}-${String(localToday.getDate()).padStart(2,"0")}`;

if (form) form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const service = services.find(item => item.id === data.get("service"));
  if (!service) {
    document.getElementById("form-feedback").textContent = "Please choose a service before continuing.";
    return;
  }
  const subject = `Crowncut booking request — ${service.name}`;
  const body = [
    "Hello Crowncut Barbershop,",
    "",
    "I'd like to request an appointment. My details are below:",
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Phone / WhatsApp: ${data.get("phone") || "Not provided"}`,
    `Service: ${service.name}`,
    `Guide price: ${naira(service.price)}`,
    `Preferred date: ${data.get("date")}`,
    `Preferred time: ${data.get("time")}`,
    `Additional notes: ${data.get("notes") || "None"}`,
    "",
    "Please let me know if this time is available. I understand the appointment is not confirmed until you reply.",
    "",
    "Thank you."
  ].join("\n");
  const mailto = `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("form-feedback").textContent = "Your email app should open with the request prepared. Please send the email to complete your request.";
  window.location.href = mailto;
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
if (menuToggle && nav) menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
if (nav && menuToggle) nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}));

const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".nav-link").forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => observer.observe(section));
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
populateServiceSelect();
renderServices();
if (serviceSelect) {
  const requestedService = new URLSearchParams(window.location.search).get("service");
  if (requestedService && services.some(service => service.id === requestedService)) {
    serviceSelect.value = requestedService;
    const feedback = document.getElementById("form-feedback");
    if (feedback) feedback.textContent = `${services.find(service => service.id === requestedService).name} selected. Complete the form to prepare your request.`;
  }
}
