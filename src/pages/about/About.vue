<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const lang = useGlobalLang()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">关于 | 谜墨</title>
    <title v-else>About | Mimor</title>
  </Head>

  <PageLayout>
    <div
      class="flex h-full flex-col space-y-3 overflow-y-auto p-3 font-serif text-xl"
    >
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 关于 </template>
            <template #en> About </template>
          </Lang>
        </div>
      </div>
    </div>
  </PageLayout>
</template>
