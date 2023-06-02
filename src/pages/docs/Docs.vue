<script setup lang="ts">
import { Head } from '@vueuse/head'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useCurrentOrigin } from '../../reactives/useCurrentOrigin'

const origin = useCurrentOrigin()
const lang = useGlobalLang()
</script>

<template>
  <Head>
    <title v-if="lang.isZh()">文档 | 谜墨</title>
    <title v-else>Docs | Mimor</title>
  </Head>

  <PageLayout>
    <div
      class="flex h-full flex-col space-y-3 overflow-y-auto p-3 font-serif text-xl"
    >
      <div class="flex items-baseline">
        <div class="font-logo text-2xl font-bold">
          <Lang>
            <template #zh> 文档 </template>
            <template #en> Docs </template>
          </Lang>
        </div>
      </div>


    </div>
  </PageLayout>
</template>
