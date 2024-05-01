import type { Schema, Attribute } from '@strapi/strapi';

export interface TravelInfoInfo extends Schema.Component {
  collectionName: 'components_travel_info_infos';
  info: {
    displayName: 'info';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    hotspot: Attribute.Boolean;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'travel-info.info': TravelInfoInfo;
    }
  }
}
