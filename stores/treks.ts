interface Trek {
  slug: string
  name: string
  description: string
  length: string
  duration: string
  difficulty: string
  maxElevation: string
  link: string
  imagePath: string
  active: boolean
}

interface State {
  trekList: Trek[]
}
export const useTreksStore = defineStore({
  id: 'treks',
  state: (): State => ({
    trekList: [
      {
        slug: 'cerces',
        name: 'Le Tour des Cerces',
        description:
          'Le tour des Cerces se situe entre la Vanoise et les Ecrins. La région de Névache s’inscrit dans le Briançonnais ce qui lui permet de profiter d’un large ensoleillement nourrissant la diversité de sa faune et sa flore. C’est l’une des plus belles randonnées de la région étant donné la pluralité des paysages rencontrés. C’est une des plus belles étapes du GR57 Tour de la Haute Clarée.\n' +
          'Avec ses 6 lacs et ses 3 cols en altitude, cette randonnée saura ravir les marcheurs les plus aguerris et les passionnés de beaux paysages. En sillonnant ces grands espaces, ce tour compte environ 1 000 mètres de dénivelé cumulé. Nous vous conseillons de débuter la boucle par la grande montée depuis le parking de Laval pour rejoindre le Pont du Moutet. Le plus dur sera fait et vous pourrez ainsi profiter du reste de la balade sur 4 jours en toute tranquillité. Le tour des Cerces offre une vue magnifique à la fois sur le fond de vallée de la Clarée et sur les pointes du Grand Séru. Sur votre balade, n’hésitez pas à vous arrêter et à vous rafraîchir près d’un des nombreux lacs du tour. The Outsiders vous conseille le lac des Béraudes qui reflète les glaciers du massif des Ecrins.\n' +
          '\n' +
          'Nous vous conseillons vivement de faire ce tour entre juin et octobre. L’été, les refuges sont ouverts et vous permettent de faire des nuits confortables. L’automne quant à lui, sublime les cols et les pointes des massifs avec ses couleurs orangées.',
        length: '56 km',
        duration: '4 jours',
        difficulty: 'modérée',
        maxElevation: '2 980 m',
        link: 'https://www.visorando.com/randonnee-le-tour-des-cerces/',
        imagePath: '/assets/img/treks/le-tour-des-cerces.png',
        active: true,
      },
      {
        slug: 'vercors',
        name: 'La traversée du Vercors',
        description:
          'Créée en 1985, la Réserve naturelle des Hauts Plateaux du Vercors couvre environ 30 km de long sur 6 km de large et constitue la plus vaste réserve terrestre en France métropolitaine. Cette forteresse naturelle de calcaire entourée de crêtes et de falaises offre des vues exceptionnelles sur le Mont Aiguille et le Grand Veymont et abrite une nature intacte avec une végétation variée et une faune sauvage en abondance (loups, chamois, bouquetins, marmottes, aigles royaux, vautours fauve, tétras lyre, …).\n' +
          '\n' +
          'Même si l’itinéraire ne présente aucune difficulté technique, quelques précautions s’imposent avant de se lancer dans ce trek réalisable uniquement en autonomie. Gardez à l’esprit que l’approvisionnement en nourriture est impossible durant la traversée et que l’eau est très rare, notamment en plein été lorsque la plupart des sources sont taries. Sur les Hauts Plateaux vous ne trouverez aucun village ou habitation permanente, aucune route, peu de balisage et pas le moindre refuge. Pour dormir il y a deux options : des cabanes et abris non gardés ou le bivouac (autorisé uniquement de 17h à 09h). Feu et cueillette interdits, couverture réseau téléphonique presque inexistante.',
        length: '53 km',
        duration: '4 jours',
        difficulty: 'modérée',
        maxElevation: '2 341 m',
        link: 'https://montourenvercors.com/itineraires-randonnee-a-pied/la-traversee-du-vercors-a-pied-gr91/',
        imagePath: '/assets/img/treks/la-traversee-du-vercors.png',
        active: false,
      },
      {
        slug: 'paradis-vanoise',
        name: 'Grand Paradis Vanoise',
        description:
          'Le Trek Nature Grand Paradis Vanoise vous fera sortir de votre zone de confort et… des frontières françaises ! Ce parcours grandiose et purement montagnard relie 5 communes et 2 parcs nationaux : Val d’Isère et Bonneval-sur-Arc en France, situées dans le Parc National de la Vanoise ; Rhêmes-Notre-Dame, Valsavarenche et Cérésole Reale, en Italie, situées dans le Parc National du Grand Paradis.\n' +
          '\n' +
          'Il existe deux versions principales de ce trek : le tour classique et un tour avec une marche sur glacier. Cette dernière nécessite donc une expérience d’école de glace et du matériel adéquat avant de partir. La première version avec ses six grandes étapes classiques n’est pas sans reste. Il faut compter environ 6 heures de marche par jour et environ 900 mètres de dénivelé. Il est donc recommandé de se faire accompagner par un guide pour les plus novices.\n' +
          '\n' +
          'Ce trek est une réelle immersion totale dans un univers de haute-montagne, à la fois si dépaysant et si intimidant : somme toute le paradis des randonneurs.',
        length: '80 à 116 km',
        duration: '6 jours',
        difficulty: 'élevée',
        maxElevation: '3 325 m',
        link: 'https://www.visorando.com/randonnee-la-traversee-du-grand-paradis/',
        imagePath: '/assets/img/treks/grand-paradis-vanoise.png',
        active: false,
      },
      {
        slug: 'massif-bauges',
        name: 'La traversée du Massif des Bauges',
        description:
          'La traversée du massif des Bauges offre une grande randonnée de Chambéry à Annecy. Le massif préalpin des Bauges, à cheval entre la Savoie et la Haute-Savoie, dénombre 14 montagnes de plus de 2 000m. Parfait pour les aventuriers en quête d’altitude ! Le massif des Bauges abrite une des plus grandes réserves de faune depuis un demi-siècle, une référence pour l’observation de la faune des Alpes du nord : ouvrez donc grands vos yeux !\n' +
          '\n' +
          'En partant de Chambéry, vous pouvez commencer votre périple en empruntant le GR 96 en direction de Lathuile. Le GR 96 est très apprécié des grands aventuriers avides de grands espaces. Sauvage, il offre des vues imprenables sur les vastes espaces du parc naturel régional comme le col de la Doria, le Sambuy, le Trelod ou encore le Colombier.\n' +
          '\n' +
          'Le massif des Bauges regorge de surprises, des gorges, des grottes, des falaises, des glacières, au pont du Diable, vous avez de quoi satisfaire toute votre curiosité. N’oubliez pas de vous arrêter pour une pause pic nique sur le plateau de Semnoz afin d’admirer la vue sur le lac d’Annecy tout en dégustant une bonne tome des Bauges !',
        length: '66 km',
        duration: '4 jours',
        difficulty: 'modérée',
        maxElevation: '1 682 m',
        link: 'https://www.lesothers.com/traversee-bauges',
        imagePath: '/assets/img/treks/la-traversee-du-massif-des-bauges.png',
        active: false,
      },
      {
        slug: 'haute-route',
        name: 'La Haute Route',
        description:
          'La Haute Route ou Route des Alpinistes est le nom donné à un raid alpin qui relie Chamonix et Zermatt, les deux capitales de l’alpinisme, en traversant les Alpes suisses et françaises. Cette randonnée glaciaire nécessite une très bonne condition physique compte-tenu des dénivelés quotidiens importants ainsi qu’une expérience et un équipement d’alpinisme approprié.\n' +
          'Pour ceux qui ne souhaitent pas chausser les crampons, il existe également une variante plus facile et peu technique où l’on reste en dessous de 3000 mètres d’altitude. Dans tous les cas, vous découvrirez des paysages très variés ainsi que des vues exceptionnelles sur le Mont Blanc, le Cervin et les plus belles cimes du Valais.\n' +
          '\n' +
          'Durant la haute saison (entre mi-juillet et mi-août), il est fortement recommandé de réserver une place dans les refuges. Sachez que la Haute Route est également réalisable durant l’hiver en ski de randonnée.',
        length: '180 km',
        duration: '8 jours',
        difficulty: 'élevée',
        maxElevation: '3 721 m',
        link: 'https://un-tour-dans-le-sac.fr/trek-chamonix-zermatt/',
        imagePath: '/assets/img/treks/la-haute-route.png',
        active: false,
      },
    ],
  }),
  getters: {
    // automatically infers the return type as a number
    numberOfTreks(state) {
      return state.trekList.length
    },
  },
})
