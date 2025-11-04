import BusinessIcon from '~/components/icons/google/business.vue'
import CameraRollIcon from '~/components/icons/google/cameraRoll.vue'
import CarIcon from '~/components/icons/google/car.vue'
import CoupleIcon from '~/components/icons/google/couple.vue'
import BabyIcon from '~/components/icons/google/crip.vue'
import FamilyIcon from '~/components/icons/google/family.vue'
import PortraitIcon from '~/components/icons/google/framePerson.vue'
import HomeIcon from '~/components/icons/google/home.vue'
import LocationIcon from '~/components/icons/google/location.vue'
import PetsIcon from '~/components/icons/google/pets.vue'
import PriceIcon from '~/components/icons/google/price.vue'
import VideoIcon from '~/components/icons/google/video.vue'

export function useMenuIcon() {
  function getIcon(name: string) {
    switch (name) {
      case 'Home':
        return HomeIcon
      case 'Couple':
        return CoupleIcon
      case 'CameraRoll':
        return CameraRollIcon
      case 'Business':
        return BusinessIcon
      case 'Car':
        return CarIcon
      case 'Baby':
        return BabyIcon
      case 'Family':
        return FamilyIcon
      case 'Portrait':
        return PortraitIcon
      case 'Location':
        return LocationIcon
      case 'Pets':
        return PetsIcon
      case 'Video':
        return VideoIcon
      case 'Price':
        return PriceIcon
      default:
        return HomeIcon
    }
  }

  return {
    getIcon,
  }
}
