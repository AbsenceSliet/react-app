import { ADDBASEINFO, RESETINFO } from "@/store/actiontype";

export const addBaseInfo = (data) => {
  return {
    data,
    type: ADDBASEINFO,
  };
};
export const resetInfo = () => ({
  type: RESETINFO,
});
