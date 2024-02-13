<<template>
  <v-btn :color='color' :prepend-icon='icon ?? null'>
    {{ text }}
  </v-btn>
</template>

<script setup lang="ts">
defineProps<{
  text?: string,
  icon?: string,
  color?: string
}>()
</script>
