import service from "@/service/fetch";

export const searchDefault = params=>service({
  method:'get',
  url: '/search/default',
})