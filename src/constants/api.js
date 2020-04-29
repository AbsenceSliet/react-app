import service from "@/service/fetch";
/**
 * 获取默认搜索值
 */
export const searchDefault = () =>
  service({
    method: "get",
    url: "/search/default",
  });

/**
 * 获取热搜榜
 */
export const hotSearch = () =>
  service({
    method: "get",
    url: "/search/hot/detail",
  });

/**
 * 获取热搜建议
 * @param keywords 关键字
 */
export const getSearchSuggest = (keywords) =>
  service({
    method: "get",
    url: "/search/suggest",
    params: {
      type: "mobile",
      keywords,
    },
  });

/**
 *
 * @param {keywords} 搜索关键字
 * @param {limit} 限制条数
 * @param {offset} 索引位置
 * @param {type} 搜索类型(见文档)
 */
export const getSearchMusic = ({ keywords, limit, offset, type = 1 }) =>
  service({
    method: "get",
    url: "/search",
    params: {
      type,
      keywords,
      limit,
      offset,
    },
  });
