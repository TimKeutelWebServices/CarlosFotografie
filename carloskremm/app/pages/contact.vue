<template>
  <NuxtLayout>
    <div class="contact">
      <div class="contact_content" :class="{ contact_content_mobile: isMobile }">
        <div class="contact_content_hero">
          <ImagesBase
            v-if="isMobile" class="contact_content_hero_image dude_image_background" src="profilwithbg.jpg"
            sizes="xs:250px sm:500px " alt="Carlos mit Kamera"
          />
          <ImagesBase
            v-else class="dude_image_background" src="profilwithbg.jpg" sizes="500px" alt="Carlos mit Kamera"
            width="500" height="500"
          />
        </div>
        <div class="contact_content_form" :class="{ contact_content_form_mobile: isMobile }">
          <div class="contact_content_form_item">
            <UiInput
              id="given-name" v-model="givenName" type="text" autocomplete="given-name" height="large"
              :disabled="isContactSend"
            >
              <label for="given-name">Vorname *</label>
            </UiInput>
          </div>

          <div class="contact_content_form_item">
            <UiInput
              id="family-name" v-model="familyName" type="text" autocomplete="family-name" height="large"
              :disabled="isContactSend"
            >
              <label for="family-name">Nachname *</label>
            </UiInput>
          </div>

          <div class="contact_content_form_row">
            <div class="contact_content_form_item">
              <UiInput id="tel" v-model="tel" type="tel" autocomplete="tel" height="large" :disabled="isContactSend">
                <label for="tel">Telefon</label>
              </UiInput>
            </div>

            <div class="contact_content_form_item">
              <UiInput
                id="email" v-model="email" type="email" autocomplete="email" height="large"
                :disabled="isContactSend"
              >
                <label for="email">E-Mail</label>
              </UiInput>
            </div>
          </div>

          <div class="contact_content_form_item">
            <UiText id="message" v-model="message" type="text" :disabled="isContactSend">
              <label for="message">Deine Nachricht *</label>
            </UiText>
          </div>

          <div class="contact_content_form_row">
            <UiCheckbox v-model="isPrivacyChecked" :disabled="isContactSend">
              <p>
                Ich habe die <a href="/privacyPolicy">Datenschutzerklärung</a> gelesen und
                stimme der Verarbeitung meiner Daten zu.
              </p>
            </UiCheckbox>
          </div>

          <UiButton :disabled="!isPrivacyChecked || isContactSend || !isFilled" @click="sendContactForm()">
            <p>Abschicken</p>
          </UiButton>

          <p v-if="!isFilled">
            <strong>Um deine Anfrage abschicken zu können, musst du alle Felder ausfüllen, die mit einem * markiert sind, und deine E-Mail-Adresse oder Telefonnummer angeben.</strong>
          </p>

          <p v-if="isContactSend">
            Wir haben deine Anfrage erhalten und werden uns so bald wie möglich bei dir melden.
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const api = useApi()
const { isMobile } = useDevice()

const isPrivacyChecked = ref(false)
const isContactSend = ref(false)

const givenName = ref('')
const familyName = ref('')
const tel = ref('')
const email = ref('')
const message = ref('')

const isFilled = computed(() => {
  return (
    givenName.value.trim() !== ''
    && familyName.value.trim() !== ''
    && tel.value.trim() !== ''
    && (email.value.trim() !== ''
      || message.value.trim() !== '')
  )
})

async function sendContactForm() {
  await api.sendContactForm({
    Name: givenName.value,
    SurName: familyName.value,
    Tel: tel.value,
    Email: email.value,
    Message: message.value,
  })
  isContactSend.value = true
}
</script>

<style lang="scss" scoped>
.contact {
  &_content {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: $spacexl;

    &_hero {
      display: flex;
      align-items: center;
      gap: $space;

      &_image {
        width: 100%;
      }

      p {
        max-width: 600px;
        text-align: center;
        font-size: 2rem;
        line-height: 1.5;
        padding: $space;
      }
    }

    &_form {
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: $spacel;

      &_row {
        display: flex;
        gap: $space;
      }

      &_item {
        box-sizing: border-box;
        width: 100%;
      }

      &_mobile {
        padding: 0 $space $space $space;
        width: 100%;
        max-width: none;
        box-sizing: border-box;
      }
    }

    &_mobile {
      flex-direction: column;
    }
  }
}
</style>
