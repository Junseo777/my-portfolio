const tabs = document.querySelectorAll('.tab');
const groups = document.querySelectorAll('.feed-group');

const subtitle = {
  profile:    '128 posts',
  featured:   '2 featured',
  projects:   '12 projects',
  experience: '6 entries',
  cv:         '1 document',
  contact:    '3 channels',
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const key = tab.dataset.tab; 

    tabs.forEach((t) => t.classList.toggle('active', t === tab));

    groups.forEach((g) => g.classList.toggle('show', g.dataset.group === key));

    document.getElementById('postcount').textContent = subtitle[key] || '';


    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});