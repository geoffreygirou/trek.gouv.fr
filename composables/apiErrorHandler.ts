import { useErrorStore } from '@/stores/errorStore'

export const useApiErrorHandler = (error: any) => {
  const errorStore = useErrorStore()

  switch (error.response ? error.response.status : 0) {
    case 503:
      errorStore.updateError({
        message: 'Erreur 503',
        title: 'Service indisponible',
        subtitle: 'Le service est temporairement indisponible',
        description: 'Vous pouvez réessayer plus tard ou nous contacter.',
        help: 'Bonne chance !',
      })
      break
    case 404:
      errorStore.updateError({
        message: 'Erreur 404 !',
        title: 'Page non trouvée, ne paniquez pas',
        subtitle:
          "La page que vous recherchez n'existe pas ou l'url est erronée.",
        description:
          'Vous pouvez retourner sur la page d’accueil ou nous contacter.',
        help: 'Bonne chance !',
      })
      break
    case 0:
      errorStore.updateError({
        message: 'Erreur 503',
        title: 'Service indisponible',
        subtitle: 'Le service est temporairement indisponible',
        description: 'Vous pouvez réessayer plus tard ou nous contacter.',
        help: 'Bonne chance !',
      })
      break
  }
}
