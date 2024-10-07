<template>
  <div>
    <HomePage></HomePage>
    <Contact></Contact>
    <AboutPage></AboutPage>
    <!-- <router-view v-slot="{ Component }">
      <Suspense>
        <template #default>
          <div>
            <component :is="Component"/>
          </div>
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </router-view> -->
    <router-view/>
  </div>
</template>

<script setup></script>

<style></style>