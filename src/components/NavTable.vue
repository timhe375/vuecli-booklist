<template>
  <header class="header">
    <div class="wrapper">
      <p class="header__logo">My Books App</p>
      <nav class="header__link-list">
        <router-link class="header__link-item" to="/">Alle Bücher</router-link>
        <router-link class="header__link-item" :to="{ name: 'BookmarksPage' }"
          >Merkliste</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>
