import { Shop } from '@/database/models/shop/Shop'
import { EntityRepository, Repository } from 'typeorm'
import { IShopRepository } from './IShopRepository'

@EntityRepository(Shop)
export class ShopRepository extends Repository<Shop> implements IShopRepository {
  /**
   * Finds a shop by its id.
   * 
   * @param id 
   * @public
   */
  public findById (id: string): Promise<Shop | undefined> {
    return this.findOne({
      where: { id },
      cache: true,
      relations: [
        'collections',
        'collections.item',
        'free',
        'next',
        'last',
      ],
    })
  }
}
