<template>
  <NuxtLayout>
    <div>
      <div class="basicText">
        <div class="global_contentBox_header">
          <h1>Impressum</h1>
        </div>

        <p>
          Carlos Kremm<br>
          Fotografie<br>
          Koppoldstra&szlig;e 1<br>
          86551 Aichach
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 1575 6900655<br>
          E-Mail: lingualucis@gmail.com
        </p>

        <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>

        <p>
          Quelle: <a
            href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useRobotsRule } from '#imports'

useRobotsRule({ noindex: true, nofollow: true })
</script>
