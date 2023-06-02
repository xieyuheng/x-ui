<script setup lang="ts"></script>

<template>
  <div>
    <div class="h-screen-dynamic flex pb-14 md:pb-0 md:pt-12">
      <div class="flex h-full w-full flex-col overflow-x-auto overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
