<template>
  <Transition name="showPreview" @click="close">
    <div v-if="currentImage !== ''" class="gallery">
      <div class="gallery_close" @click="close">
        <IconsGoogleArrow class="gallery_close_icon" />
      </div>
      <div class="gallery_image">
        <ImagesBase v-if="currentImage !== 'loading'" :src="currentImage" alt="" @click.stop.prevent="" />
        <ImagesBase v-else src="fulllogo_transparent_nobuffer.png" sizes="54px" alt="" />
      </div>
      <div class="gallery_preview">
        <slot />
      </div>
    </div>
  </Transition>
  <div class="gallery_scroller">
    <div class="gallery_scroller_inner">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'

const route = useRoute()
const router = useRouter()

const currentImage = ref('')

watch(route, async () => {
  if (route.query.image === undefined) {
    currentImage.value = ''
  }
  else {
    currentImage.value = 'loading'
    await nextTick()
    currentImage.value = route.query.image!.toString()
  }
})

onMounted(() => {
  if (route.query.image !== undefined)
    currentImage.value = route.query.image!.toString()
})

function close() {
  router.push({ query: {} })
}
</script>

<style lang="scss" scoped>
.gallery {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  background-color: $mainBackgroundColorTransperant;
  backdrop-filter: $backdrop;
  z-index: 19;

  &_close {
    position: absolute;
    right: $space;
    top: $space;

    &_icon {
      rotate: 270deg;
    }
  }

  &_preview {
    display: flex;
    width: auto;
    box-sizing: border-box;
    max-width: 100%;
    height: $navHeight_quatruple;
    padding: $space;
    gap: $space;
    display: flex;

    img {
      box-shadow: none;
    }
  }

  &_image {
    display: flex;
    flex-direction: column;
    padding: $space;
    max-height: 50%;
    margin-top: $spacel;

    a {
      max-width: 100%;
      max-height: 100%;
      height: unset;
      width: unset;
      margin: auto;

      img {
        object-fit: contain;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  &_scroller {
    overflow-y: hidden;
    overflow-x: scroll;

    &_inner {
      display: grid;
      grid-auto-flow: column dense;
      justify-content: start;
      grid-template-columns: repeat(auto-fill, 200px);
      grid-template-rows: repeat(4, 150px);
      gap: $space;
      height: 100%;
      margin: $space auto;
      width: max-content;

      a {
        img {
          width: 100%;
        }
      }
    }
  }
}

.showPreview-enter-active,
.showPreview-leave-active {
  transition: all 0.5s ease;
}

.showPreview-enter-from,
.showPreview-leave-to {
  transform: translateY(+150%);
}
</style>
