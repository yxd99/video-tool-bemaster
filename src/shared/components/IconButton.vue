<<template>
  <v-btn :color='color' :icon='icon'>
  </v-btn>
</template>

<script setup lang="ts">
defineProps<{
  icon: string,
  color?: string
}>()
</script>
