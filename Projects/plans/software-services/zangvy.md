# Zangvy

Web

- boards - each baord has its own kind of speciality. (in the case of me, I can have a for example YouTube board, Developer board, or Photographer board)
- board type [developer, content creator, film maker, photographer / videographer, designer, music maker, composer, instrucment players]
- main board(1) sub boards
- board background colour

- sharing tools and gears (zangvy.xyz/@[username] for the main board and zangvy.xyz/@[username]/boardName for the specific board)

- being able to put just one board for free users
- analytics for premium users

### database table

User

- name
- username
- age
- bio
- links to other social media
- pronounce
- based on
- avatar
- background image
- boards

Board

- board name: as literal ("as a developer", "as a photographer")
- description
- background image or logo
- main colour
- products

Product

- product name
- used when
- used for
- price when bought
- price right now
- amazon link
- 3d/2d images of them for inspectts
- the review in json

```
[
    {
        heading: 1,
        text: "jsaklf"
    },
    {
        text: "asjdflasdfkjlasdfklj" // markdown thing; if it finds an img tag than it will split it up for better user experience
    },
    {
        image: "image url to maybe cloudflare or maybe the image can be stored in the database and when they are sent to the client, it can be converted into base64 encode.",
        description: "sdafjkla"
    }
]
```
