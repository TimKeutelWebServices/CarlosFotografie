<template>
  <div class="dude">
    <div class="dude_image">
      <div ref="backgroundBanner" class="dude_image_background_banner" />
      <ImagesBase
        class="dude_image_background" src="profilwithbg.jpg" sizes="255px" alt="Carlos mit Kamera"
        width="255" height="255"
      />
    </div>
    <div class="dude_text">
      <p class="dude_text_header">
        Hallo, mein Name ist Carlos
      </p>
      <p class="dude_text_content">
        <slot name="textContent" />
        und ich habe
        mich darauf spezialisiert, Menschen, Tiere
        und besondere Momente in authentischen
        und ästhetischen Bildern festzuhalten. In
        meinem Fotostudio erwartet dich eine
        entspannte Atmosphäre, in der du dich
        wohlfühlen und ganz du selbst sein kannst.
        Lass uns gemeinsam zeitlose Erinnerungen
        schaffen. Ich freue mich darauf, gemeinsam
        mit dir dein Traum-Fotoshooting zu planen.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'

const banner = useTemplateRef('backgroundBanner')

function handleScroll() {
  const element = banner.value
  if (!element)
    return
  const scrollPosition = window.scrollY
  const translateY = scrollPosition * 0.25
  element.style.transform = `translateY(-${translateY}px)`
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss">
.dude {
  position: relative;
  max-width: $maxWidth;
  margin: 0 auto;
  padding: $space;

  &_text {
    position: absolute;
    top: $space;
    right: 0;
    left: 0;
    box-sizing: content-box;
    width: 100%;
    max-width: 500px;
    z-index: 10;
    margin: 0 auto $space auto;
    padding: $space 0;
    background-color: $mainBackgroundColorTransperant;
    backdrop-filter: $backdrop;
    border-radius: $space;

    &_header {
      padding: 0 $space !important;
      font-weight: 800;
      font-size: 1.15rem;
    }

    &_content {
      padding: $space;
    }
  }

  &_image {
    position: relative;
    width: min(75dvw, calc($maxWidth / 1.5));
    min-height: 200px;
    height: 100dvw;
    max-height: 300px;
    margin-bottom: 40px;
    user-select: none;
    box-sizing: border-box;

    a {
      position: absolute;
      bottom: 0;
      left: $space;
      height: 100%;
    }

    &_background {
      cursor: auto;
      box-sizing: border-box;

      img {
        box-shadow: none !important;
        padding: $spacexs;
        border: 20px solid transparent;
        border-image: url('https://media.lingualucis.de/cdn-cgi/image/w=255,f=webp,q=80,fit=contain/media/rahmen.png') 11%;
      }

      &_banner {
        content: '';
        position: absolute;
        bottom: 0;
        left: -250%;
        width: 350%;
        min-height: 150px;
        height: 25dvw;
        max-height: 200px;
        background: linear-gradient(180deg, $mainBackgroundColor -100%, $detailColor 100%);
        box-shadow: $boxShadow;
        border-radius: 0 0 75px 0;
        transition: .005s all ease-out;
      }
    }
  }
}

@media only screen and (max-width:1000px) {
  .dude {
    &_text {
      position: relative;
    }

    &_image {
      width: 100%;

      a {
        position: absolute;
        right: 0;
        left: 0;
        width: 100%;
      }

      &::before {
        border-radius: 0;
      }
    }
  }
}
</style>
