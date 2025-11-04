export function useApi() {
  const runtimeConfig = useRuntimeConfig()

  async function sendContactForm(data: any) {
    await $fetch<void>(`${runtimeConfig.public.webApiUrl}/${runtimeConfig.public.projectId}/Public/Create`, {
      method: 'POST',
      body: {
        ...data,
      },
    })
  }

  return {
    sendContactForm,
  }
}
