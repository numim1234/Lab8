import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {
  
  

  const menu = ref([
    { name: 'ปลากระพงทอดน้ำปลา', img: 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/377555809_159090280571499_870170146683553109_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeGSJRExTxb9Uz4EJqDm28QyKzMhA4-YsuMrMyEDj5iy49KT2FITylksDuSYiZptOv9CmTGM1AqiviV0zglaM_mS&_nc_ohc=bEu382cgFV4AX8W2UTX&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfCSIGBMcLcL1cvDtb_LMviZSmV-KbUumgrXNs3F-bV2LA&oe=65252179', price: 299 },
    { name: 'กรรเชียงปูนึ่ง', img: 'https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/366804203_140660062414521_604893437167418056_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeFnhDyyKWYrJ0I0P6koIpaGGrJsNer1lGkasmw16vWUaVlEci1IWY8aZqeON09YPQFVjaJ1YDweyBIOJN-qUiMV&_nc_ohc=cCpjDfoBBdMAX_gPJbr&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfBXjCKeHYgnAjIaGDs--f40v58KZiuZKkJ6yalWSgF46A&oe=652521F0', price: 259 },
    { name: 'กุ้งแม่น้ำย่าง', img: 'https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/363350057_139357555878105_3884692632130905858_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeG6o2A6rF6oxMg-XJLZRxxin6Vm-n-qr7ufpWb6f6qvu38FPzpzCDdqWiIxU2t6RZrHLtWq5vobphUbbbCuwUfl&_nc_ohc=_qs4k7tFQYkAX8V_h33&_nc_ht=scontent.fbkk29-6.fna&oh=00_AfDYypBE7m5CDEttfe0YhYdp-Lp3Xa3lf5UX5nc-tH6BWA&oe=65265CBA', price: 999 },
    { name: 'หมึกย่าง', img: 'https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/361643237_126246453855882_2366334464491535868_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEMuP3iXIMFdAT2AvCKEEUKpMiVGrlqry-kyJUauWqvL6cdXdGl75x-WuLw5LbB7-MvntD47d7Y5QwxvNJvb0dv&_nc_ohc=XEXQLaMOT3wAX9pJlnH&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfB2BLAHBt6Mwltr9bN3HvaYSXQDUkWsqpr8djntwkgRdQ&oe=6525885E', price: 299 },
    { name: 'หอยนางรม', img: 'https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/366587297_140658522414675_1710508794067151623_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeFg9jnXXcw0vitvlx8vIri-lWeilJYoQrqVZ6KUlihCuo6ma_tuXbWYvzJ041XDGLKT5Gm4Vl3WJQvvx63VVNax&_nc_ohc=yOzgZ_IBudgAX-zlW6L&_nc_ht=scontent.fbkk29-6.fna&oh=00_AfCZJb4pKh91rNaXeN5LA7S8mJbZpZjb_zgtHjDLGDihmg&oe=6525B62C', price: 359 },
    { name: 'กั้งคั่วพริกเกลือ', img: 'https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/357730561_118964217917439_8917848912816821358_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeG5n1JkcXfcxFdJGtsu01UdtOiS3UtsUse06JLdS2xSx2oh_QpmlM8UBecl7X0viE52woZD4_LipHC7YpoEKqxt&_nc_ohc=9SHtuSvgmFYAX_JJNIi&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfAwXGB191BBKYuwqo2ydGg28O7-Cuc1RfVo0YwdSS5pDw&oe=6526BEEF', price: 200 },
    { name: 'ปูนิ่มผัดพงกระหรี่', img: 'https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/376285222_157263517420842_1469932735704405341_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHpHIkzE5Pa199Np_TfI4mz6Sv0QpeL8KvpK_RCl4vwq-lhTlUPkcJMZCDZJUjTBuaFc4pBzCFPTVKEtz5H3QE9&_nc_ohc=pGMKZHIzQSoAX9D4xTS&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfCjL-VKuJXDLSAstWGVsSiZT1UvOdKWSgjv6gcLxIZVWw&oe=65250F12', price: 199 },
    { name: 'ต้มยำกุ้ง ', img: 'https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/373451150_155193874294473_5021661615683655022_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeFkzfKHK0PXZGwm2w1DQzDptnnvbl-oiyW2ee9uX6iLJTAwwZloL1g3ifZs4b4aDbq3eizmhNW08Zj8kIvgS0Dq&_nc_ohc=cB36Gcs3BxEAX-mBmri&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfCT8fONX6932lcsChoRySc9seib9OdZICPS-tZsGSbIhg&oe=6525383A', price: 189 },
    { name: 'กระพงนึ่งมะนาว ', img: 'https://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/368303937_145249901955537_7361955616505479732_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeE5y-tDT7QUDN31dYCFmZUqoFnOgyUEwpqgWc6DJQTCmg4l5gSOzVz24NEyBkNs1ueimydlAeDDbq2fdJ5nPN17&_nc_ohc=fqORl2kVRIgAX-wKRde&_nc_ht=scontent.fbkk29-9.fna&oh=00_AfD8bflyWpaL5urntUpJDEOvTDJ0K35h5airxvYBuqbi0g&oe=6525A359', price: 220 },
    { name: 'ปลาดุกฟู ', img: 'https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/367713095_144011635412697_7130387136903594099_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeGrfzacFdg19XWTts-AkWRxp9AhiXS1KKun0CGJdLUoq5htW9BuW34NdDxewRTvniXdILN4nw1q5nE9MFmxpiZr&_nc_ohc=Vlm4m9RZKfMAX-FCZQD&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfD_oLVLBJUQmOBwbOyhhROwOpOo5cq6PYtqNaxcE95tvw&oe=65264E9C', price: 250 },
    { name: 'สามชั้นคั่วพริกเกลือ', img: 'https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/367491375_143198578827336_953943476241291918_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEJs5yQQWVdqX42wlN7H2HKH9w8fCt4VBgf3Dx8K3hUGM8oBDYSKKJ9LmZa36C_qOZkdZIP2wyPer9Q94zyUbRE&_nc_ohc=kYcEWG6ZJs8AX9jcd2v&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfDhUqq7kR-LChPb7BW_M8AAiXVSPUNlpJocD60hnqzn0A&oe=6525F411', price: 259 },
    { name: ' ข้าวผัดสับปะรด', img: 'https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/365316529_136397402840787_7130620314617887063_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeE5BS13XEtxsUZpJ-fvOfWn-uvE734Qb2j668TvfhBvaHOecsumNfWmoYG9kYXglc7PX4Ez2gyZGzZKw-1R6i19&_nc_ohc=SdXXR2_79kwAX93q1Ic&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfDZ5fhjsKS_geCMnkSRXmF57DyNa2gVhkGvPImGKkFjIg&oe=6526AE1A', price: 199 },



  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
