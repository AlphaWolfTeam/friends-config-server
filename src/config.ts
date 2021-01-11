export const uiConfiguation = {
  uri: {
    api_gateway_uri: process.env.APR_GETWAY_URI || 'http://localhost:3000',
    auth_service_uri: process.env.AUTH_SERVICE_URI || 'http://localhost:3001',
    config_service_uri: process.env.CONFIG_SERVICE_URI || 'http://localhost:3002',
  },
  roles: {
    member_role_value: process.env.MEMBER_ROLE_VALUE || 0,
    modifier_role_value: process.env.MODIFIER_ROLE_VALUE || 1,
    manager_role_value: process.env.MANAGER_ROLE_VALUE || 2,
  },
  length_limitations: {
    min_group_name: process.env.MIN_GROUP_NAME_LENGTH || 2,
    min_tag_length: process.env.MIN_TAG_LENGTH || 2,
    min_user_search_value: process.env.MIN_USER_SEARCH_VALUE || 2,
  },
  auth_service_token: process.env.AUTH_SERVICE_TOKEN || 'friendsToken',
};

export const server = {
  port: process.env.PORT || '3002',
};
