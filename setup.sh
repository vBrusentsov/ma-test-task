# Init npm package
npm init -y

# Add node_modules to ignore
echo "node_modules" > .gitignore

# Install modules
npm i eslint eslint-config-prettier eslint-config-airbnb-base eslint-plugin-import prettier eslint-plugin-prettier --save-dev

# Add vscode plugins to recommendations
mkdir ./.vscode
echo "{
  \"recommendations\": [
    \"dbaeumer.vscode-eslint\",
    \"esbenp.prettier-vscode\"
  ]
}" > ./.vscode/extensions.json

# Add prettier config
echo "{
  \"singleQuote\": true,
  \"printWidth\": 140,
  \"trailingComma\": \"all\",
  \"semi\": true
}" > .prettierrc.json

# Add eslint config
echo "{
    \"env\": {
        \"commonjs\": true,
        \"es2021\": true,
        \"node\": true
    },
    \"plugins\": [\"prettier\"],
    \"extends\": [
        \"airbnb-base\",
        \"prettier\"
    ],
    \"parserOptions\": {
        \"ecmaVersion\": 12
    },
    \"rules\": {
        \"quotes\": [\"error\", \"single\"],
        \"prettier/prettier\": \"error\"
    }
}" > .eslintrc.json
