const response = await fetch('api/posts-content.json');
const posts = await response.json();

function render_posts_on_main(posts) {
  const repoName = '1299-team-04';
  const isGitHubPages = window.location.pathname.includes(repoName);
  const basePath = isGitHubPages ? `${window.location.origin}/${repoName}` : window.location.origin;
  let postsHtml = '';
  for (const post of posts) {
    postsHtml += `
        <div class="main-posts__main-post">
            <a href="${basePath}/${post.link}" class="blog-part"><img src="${post.image}" alt="${post.title}"></a>
            <p>${post.date}</p>
            <a href="${basePath}/${post.link}" class="blog-part">
                <h3>${post.title}</h3>
            </a>
            <a href="${basePath}/${post.link}" class="blog-part">
                <p>${post.mainText}</p>
            </a>
            <div class="main-posts__post-creator">
                <img src="img/blog/svg/blog-user-logo.svg" alt="">
                <p>${post.author}</p>
            </div>
        </div>`;
  }
  document.querySelector('.our-blog__main-posts').innerHTML = postsHtml;
}

render_posts_on_main(posts);


