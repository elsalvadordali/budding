module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        "plugins": [
            ['module-resolver', {
                "alias": {
                    "$screens": './src/screens',
                    "$navigators": './src/navigators',
                    "$components": './src/components',
                    "$styles": './src/styles',
                }
            }]
        ]
    };
};
