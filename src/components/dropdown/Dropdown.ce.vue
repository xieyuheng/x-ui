<script setup lang="ts"></script>

<template>
  <div>
    <div>Dropdown TODO</div>
    <div><slot name="head">head</slot></div>
    <div><slot>body</slot></div>
    <div><slot name="foot">foot</slot></div>
  </div>
</template>
