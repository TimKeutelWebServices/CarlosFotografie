<template>
  <div class="gallery">
    <div class="gallery_overview">
      <div v-for="(overviewItem, index) in galleryItem.overview" :key="index">
        <div class="gallery_overview_image">
          <template v-if="overviewItem.imageUrl">
            <ImagesBase
              v-if="!isMobile" :src="overviewItem.imageUrl" sizes="195px" :alt="overviewItem.imageAlt || ''"
              style="float: left;" lazy-loading allow-query-push width="180" height="250"
            />
            <ImagesBase
              v-else class="gallery_overview_image_mobile" :src="overviewItem.imageUrl" sizes="400px"
              :alt="overviewItem.imageAlt || ''" height="400" lazy-loading allow-query-push
            />
          </template>
        </div>
        <div class="gallery_overview_text">
          <h3 v-if="overviewItem.title" class="gallery_overview_text_title">
            {{ overviewItem.title }}
          </h3>
          <p v-if="overviewItem.text">
            {{ overviewItem.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="gallery_contact">
      <UiContact label="Kontakt" @click="console.log('sss')" />
    </div>
    <div class="gallery_area">
      <AreaScroller :portfolio-id="galleryItem.portfolioId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GalleryModel } from '~/types/galleryModel'

defineProps<{
  galleryItem: GalleryModel
}>()

const { isMobile } = useDevice()
</script>

<style lang="scss" scoped>
.gallery {
  &_overview {
    display: flex;
    flex-direction: column;
    gap: $space;
    max-width: 1000px;
    margin: 0 auto;

    &_image {
      a {
        padding: 0 $space $space 0;
      }

      &_mobile {
        padding: 0 0 $spacel 0 !important;

        img {
          width: 100%;
          max-width: 450px;
        }
      }
    }

    &_text {
      padding: 0 $space;

      &_title {
        color: $darkFontColor;
        margin-top: 0;
      }
    }
  }

  &_header {
    text-align: center;
  }

  &_contact {
    display: flex;
    justify-content: center;
  }

  &_area {
    overflow: auto;
  }
}
</style>
