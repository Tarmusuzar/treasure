<template>
  <section class="blog-section">
    <div class="section-header">
      <h2>Latest Updates</h2>
      <p>News and tips for managing your utilities</p>
    </div>

    <div class="blog-grid">
      <article class="blog-card" v-for="post in posts" :key="post.id">
        <div class="card-image">
          <img :src="post.image" :alt="post.title">
          <div class="category-tag">{{ post.category }}</div>
        </div>
        <div class="card-content">
          <h3>{{ post.title }}</h3>
          <p class="excerpt">{{ post.excerpt }}</p>
          <div class="meta">
            <span class="date">{{ post.date }}</span>
            <span class="read-time">{{ post.readTime }}</span>
          </div>
          <button class="read-more" @click="viewPost(post.id)">
            Read More <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </article>
    </div>

    <div class="section-footer">
      <button class="view-all" @click="viewAllPosts">
        View All Articles
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogSection',
  data() {
    return {
      posts: [
        {
          id: 3,
          title: "The Future of Digital Payments in Uganda",
          excerpt: "How mobile money and crypto are transforming utility payments.",
          category: "Innovation",
          date: "May 30, 2023",
          readTime: "5 min read",
          image: "https://media.istockphoto.com/id/1465618017/photo/businessmen-investor-think-before-buying-stock-market-investment-using-smartphone-to-analyze.jpg?s=612x612&w=0&k=20&c=YNEkfoME1jbz6FUJImxCQtaGZZntrf7u-Byxmgk4pOY="
        },
        {
          id: 1,
          title: "How to Save on Your UMEME Electricity Bill",
          excerpt: "Discover practical tips to reduce your monthly electricity costs in Uganda.",
          category: "Energy",
          date: "June 15, 2023",
          readTime: "4 min read",
          image: "https://newvision-media.s3.amazonaws.com/cms/1bf22606-d445-4b94-856c-336350b47893.jpg"
        },
        {
          id: 2,
          title: "NWSC Water Payment Options Explained",
          excerpt: "A complete guide to all payment methods available for your water bills.",
          category: "Water",
          date: "June 8, 2023",
          readTime: "3 min read",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHCCmaZENO6m70QIHpKlLwX94gnz-v08AFxw&s"
        },
        
      ]
    }
  },
  methods: {
    viewPost(id) {
      // Navigate to post detail view
      console.log(`Viewing post ${id}`)
    },
    viewAllPosts() {
      // Navigate to blog archive
      console.log("Viewing all posts")
    }
  }
}
</script>

<style scoped>
.blog-section {
  padding: 6rem 1rem;
  background: var(--neutral-100);
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.section-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.blog-card {
  background: var(--neutral-200);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .card-image img {
  transform: scale(1.05);
}

.category-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  line-height: 1.4;
}

.excerpt {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.meta {
  display: flex;
  justify-content: space-between;
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: all 0.2s ease;
}

.read-more:hover {
  color: var(--primary-dark);
  gap: 0.75rem;
}

.read-more i {
  font-size: 0.8rem;
  transition: all 0.2s ease;
}

.section-footer {
  text-align: center;
  margin-top: 2rem;
}

.view-all {
  padding: 0.75rem 2rem;
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-all:hover {
  background: rgba(var(--primary-rgb), 0.05);
}

[data-theme="dark"] .blog-section {
  background: var(--dark-neutral-100);
}

[data-theme="dark"] .blog-card {
  background: var(--dark-neutral-200);
}

[data-theme="dark"] .card-content h3 {
  color: var(--dark-text-primary);
}

[data-theme="dark"] .excerpt,
[data-theme="dark"] .meta {
  color: var(--dark-text-secondary);
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .card-image {
    height: 250px;
  }
}
</style>