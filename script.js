function displayPosts(posts) {
  const container = document.getElementById('postsContainer');
  container.innerHTML = ''; // Clear current posts

  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
    container.appendChild(div);
  });
}

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = blogPosts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query)
  );
  displayPosts(filtered);
}

document.getElementById('searchInput').addEventListener('input', handleSearch);

// Initial render
displayPosts(blogPosts);
