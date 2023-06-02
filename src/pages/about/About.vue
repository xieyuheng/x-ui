<script setup lang="ts">
import { Head } from '@vueuse/head'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
</script>

<template>
  <Head>
    <title>About | X UI</title>
  </Head>

  <PageLayout>
    <div
      class="flex h-full flex-col space-y-3 overflow-y-auto p-3 font-serif text-xl"
    >
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">About</div>
      </div>
    </div>
  </PageLayout>
</template>
