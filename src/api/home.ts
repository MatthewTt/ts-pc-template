import { ITemplateQuery } from '@/api/types/home'
import request from '../../utils/request'

export const getTemplate = (data?: ITemplateQuery) => {
  return request({
    url: '/template',
    method: 'get',
    data: data
  })
}
