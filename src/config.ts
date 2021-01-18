export const uiConfiguation = {
  uri: {
    api_gateway_uri: process.env.API_GATEWAY_URI || 'http://localhost:8000',
    auth_service_uri: process.env.AUTH_SERVICE_URI || 'http://localhost:3002',
  },
  roles: {
    member_role_value: process.env.MEMBER_ROLE_VALUE || 0,
    modifier_role_value: process.env.MODIFIER_ROLE_VALUE || 1,
    manager_role_value: process.env.MANAGER_ROLE_VALUE || 2,
  },
  length_limitations: {
    min_length_group_name: process.env.MIN_LENGTH_GROUP_NAME || 2,
    min_length_tag: process.env.MIN_LENGTH_TAG_LENGTH || 2,
    min_length_user_search_value: process.env.MIN_LENGTH_USER_SEARCH_VALUE || 2,
  },
  token_name: process.env.TOKEN_NAME || 'friends-token',
};

export const server = {
  port: process.env.PORT || '8000',
};
