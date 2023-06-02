<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRoute } from 'vue-router'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const route = useRoute()
</script>

<template>
  <PageLayout>
    <Head>
      <title>404 | x-ui</title>
    </Head>

    <template #title>
      <div class="font-logo">404</div>
    </template>

    <div class="flex flex-col space-y-2 p-3">
      <div class="text-xl font-bold">Page Not Found</div>

      <div class="overflow-x-auto font-mono text-sm">{{ route.fullPath }}</div>
    </div>
  </PageLayout>
</template>
