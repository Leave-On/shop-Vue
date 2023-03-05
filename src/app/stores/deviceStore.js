import { defineStore } from "pinia"

export  const useDeviceStore = defineStore('device', {
  state: () => ({
    types: [],
    brands: [],
    devices: [],
    description: [],
    selectedDevice: {},
    selectedBrand: {},
    selectedType: {},
    page: 1,
    totalCount: 0,
    limit: 2,
    pageCount: 2
  }),
  actions: {
    setTypes(types) {
      this.types = types
    },
    setBrands(brands) {
      this.brands = brands
    },
    setDevices(devices) {
      this.devices = devices
    },
    setSelectedType(type) {
      this.setPage(1)
      this.selectedType = type
    },
    setSelectedBrand(brand) {
      this.setPage(1)
      this.selectedBrand = brand
    },
    setSelectedDevice(device) {
      this.selectedDevice = device
    },
    setDeviceLoaded(bool) {
      this.isDeviceLoaded = bool
    },
    setPage(page) {
      this.page = page
    },
    setTotalCount(total) {
      this.totalCount = total
    },
    setLimit(limit) {
      this.limit = limit
    },
    setPageCount(count) {
      this.pageCount = count
    }
},
getters: {
  getDevices(typeId, brandId, page, limit = 2) {

  }
}
})