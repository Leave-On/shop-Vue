import { computed } from 'vue';
import db from '../../../../db/db.json'

export function useDeviceFilter(typeId, brandId, page = 1, limit = 8) {
  const getDevices = computed(() => {
    let devices
    // let offset = page * limit - limit
    if (!typeId && !brandId) {
      devices = db.devices
    } else if (!typeId && brandId) {
      devices = db.devices.filter(device => device.brandId === brandId)
    } else if (typeId && !brandId) {
      devices = db.devices.filter(device => device.typeId === typeId)
    } else if (typeId && brandId) {
      devices = db.devices.filter(device => device.brandId === brandId && device.typeId === typeId)
    }
    const start = (page - 1) * limit;
    const end = start + limit;
    const devicesPerPage = devices.slice(start, end);
    return {devices, devicesPerPage}
  })

  return {
    getDevices
  };
}
