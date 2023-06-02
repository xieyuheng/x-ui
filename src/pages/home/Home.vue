<script setup lang="ts">
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <div class="flex flex-col overflow-y-auto p-3">
      <div>X UI</div>

      <x-dropdown>
        <div slot="head">head 1</div>
        <div>body 1</div>
        <div slot="foot">foot 1</div>
        <div>body 2</div>
      </x-dropdown>
    </div>
  </PageLayout>
</template>
