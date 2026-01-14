---
layout: page
title: Contact
description: Get in touch with me.
permalink: /contact/
nav_order: 5
narrow: true
---

I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.

## Connect With Me

<ul class="social-links" style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem;">
{% if site.data.profile.social.github %}
  <li><a href="{{ site.data.profile.social.github.url }}" target="_blank" rel="noopener noreferrer">GitHub - {{ site.data.profile.social.github.username }}</a></li>
{% endif %}
{% if site.data.profile.social.linkedin %}
  <li><a href="{{ site.data.profile.social.linkedin.url }}" target="_blank" rel="noopener noreferrer">LinkedIn - {{ site.data.profile.social.linkedin.username }}</a></li>
{% endif %}
{% if site.data.profile.social.twitter %}
  <li><a href="{{ site.data.profile.social.twitter.url }}" target="_blank" rel="noopener noreferrer">Twitter - @{{ site.data.profile.social.twitter.username }}</a></li>
{% endif %}
{% if site.data.profile.social.email %}
  <li><a href="{{ site.data.profile.social.email.url }}">Email - {{ site.data.profile.social.email.address }}</a></li>
{% endif %}
</ul>

## Send a Message

<form id="contact-form" class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
  <div class="form-group">
    <label for="name">Name <span aria-hidden="true">*</span></label>
    <input type="text" id="name" name="name" required autocomplete="name" placeholder="Your name">
  </div>
  
  <div class="form-group">
    <label for="email">Email <span aria-hidden="true">*</span></label>
    <input type="email" id="email" name="email" required autocomplete="email" placeholder="your.email@example.com">
  </div>
  
  <div class="form-group">
    <label for="message">Message <span aria-hidden="true">*</span></label>
    <textarea id="message" name="message" required placeholder="Your message..."></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>

<p class="text-muted text-sm mt-1">
  <em>Note: This form requires a <a href="https://formspree.io" target="_blank" rel="noopener">Formspree</a> endpoint. Update the form action with your endpoint URL.</em>
</p>
