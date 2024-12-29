export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const navHeight = 80; // Height of the fixed navigation
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - navHeight;

  window.scrollTo({
    top: sectionId === 'hero' ? 0 : offsetPosition,
    behavior: 'smooth'
  });
}