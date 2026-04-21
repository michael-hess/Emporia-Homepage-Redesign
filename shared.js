// Shared nav + footer markup, injected into pages
window.renderNav = function() {
  return `
    <nav class="nav">
      <div class="nav-inner">
        <a class="nav-logo" href="index.html" aria-label="Emporia">
          <img src="assets/emporia-logo-dark.png" alt="Emporia">
        </a>
        <div class="nav-links">
          <a class="nav-link">Products <span class="caret">▾</span></a>
          <a class="nav-link">Resources <span class="caret">▾</span></a>
          <a class="nav-link">Solutions <span class="caret">▾</span></a>
          <a class="nav-link" href="#">Contact Sales</a>
        </div>
        <div class="nav-cta-group">
          <a class="nav-signin nav-link">Sign in <span class="caret">▾</span></a>
          <a class="btn" href="#">Become a Participant</a>
          <a class="btn btn-primary" href="#">Schedule a Demo</a>
        </div>
      </div>
    </nav>
  `;
};

window.renderFooter = function() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo"><img src="assets/emporia-logo-light.png" alt="Emporia"></div>
          <div class="footer-tagline">Never miss a thing. Subscribe to {twir} to get the latest in market research and insights delivered straight to your inbox every Friday.</div>
          <form class="footer-newsletter" onsubmit="event.preventDefault(); this.querySelector('button').textContent='✓ Subscribed';">
            <select>
              <option>I work at a research agency</option>
              <option>I work at a consulting firm</option>
              <option>I work at a startup</option>
              <option>I work at an enterprise company</option>
              <option>I'm interested in research participation</option>
            </select>
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div class="footer-col">
          <h4>Use Cases</h4>
          <ul>
            <li><a href="#">Consulting Firms</a></li>
            <li><a href="#">Enterprises</a></li>
            <li><a href="#">Market Research Agencies</a></li>
            <li><a href="#">Private Equity</a></li>
            <li><a href="#">Research Platforms</a></li>
            <li><a href="#">Startups</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">ESOMAR36</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Docs</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2026 Emporia Learning Inc.</div>
        <div>Where Researchers Access Expert Opinions.</div>
      </div>
    </footer>
  `;
};

// generic reveal observer
window.enableReveals = function() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
};
