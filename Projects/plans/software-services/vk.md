# Vk

CLI tool with a server by Go

- Settings
- Edit
  - Files
    - Builtin LSPs
    - Builtin Keymaps
    - Builtin Numberings, Tab navigation, File Exploreer, Statusbar, auto brackets auto colouring... all of the things that neovim and vscode has. hex colouring todo fix colouring
- Customizable Searches
  - Google
  - DuckDuckGoo
- AI
  - formats
  - folders or projects
  - model choices
- Daily Reports
- quick notes
- videos
- todos

- When using vk commands, most of them will have windows where the users can move around freely using keyboards.
- There are going to be six different windows that can fill out the screen. The first one is mostly going to be sidebar. The sidebar is like list of previous chats for AIs or file tree for editor. The other three windows are always free. All of them might be used for one purpose , or second and third windows might be used for one purpose. It can be customized.

### Settings (`~/.config/vk/setting.json`, could be toml yaml, does not matter)

```json
{
  "edit": {
    "shorten": "e",
    "settings": {
      "visuals": {
        "colours": {
          "keywords": {},
          "numbers": {
            "currentnumber": "",
            "othernumbers": ""
          },
          "tab": {
            "background": "",
            "font": ""
          },
          "error": {
            "main": "",
            "background": ""
          },
          "warning": {
            "main": "",
            "background": ""
          }
        },
        "icons": {
          "error": "",
          "warning": "",
          "codeaction": ""
        },
        "tab": {
          "elements": {
            "left": ["file.getErrorStatus()", "file.getWarningStatus()"],
            "right": ["file.getFileName()"]
          }
        },
        "files": {
          "separator": "character defualt: │"
        },
        "statusline": {
          "position": "at the bottom | on each file",
          "elements": {
            "left": ["mode", "git.logo", "git.current_branch", "file.name"],
            "right": ["file.type", "cursor.current_pos"]
          }
        },
        "numbers": "relative | true | false",
        "emptylines": "character defeualt: ~",
        "gitsigns": "character default: ▎"
      },
      "functionalities": {
        "autobrackets": "true | false",
        "formatOnSave": "true | false",
        "lsps": {
          "language": {
            "install": "install command",
            "settings": {}
          }
        },
        "fileexploerer": {
          "create_new_file": "<control>n"
        }
      },
      "keymaps": {
        "esc": "control:c",
        "modetriggers": {
          "normal": "control:c",
          "insert": "i",
          "cutinsert": "c",
          "endinsert": "shift:a",
          "beginninginsert": "shift:i",
          "visual": "v",
          "visualline": "shift:v",
          "visualblock": "control:v"
        },
        "move": {
          "cursor": {
            "left": "h",
            "right": "l",
            "up": "k",
            "down": "j"
          },
          "tab": {
            "left": "th",
            "right": "tl",
            "up": "tk",
            "down": "tj"
          },
          "file": {
            "left": "sh",
            "right": "sl",
            "up": "sk",
            "down": "sj"
          },
          "filewindow": {
            "left": "shift:sh",
            "right": "shift:sl",
            "up": "shift:sk",
            "down": "shift:sj"
          },
          "visualblock": {
            "left": "control:h",
            "right": "control:l",
            "up": "control:k",
            "down": "control:j"
          }
        },
        "jump": {
          "left": "shift:h",
          "right": "shift:l",
          "up": "shift:k",
          "down": "shift:j"
        },
        "diagnostic": {
          "next": "control:n",
          "previous": "control:p"
        },
        "surrounds": {
          "around": "a",
          "inside": "i",
          "next": "n",
          "previous": "p",
          "add": "ga{1}",
          "remove": "gd{1}",
          "change": "gr{1}{2}"
        },
        "completion": {
          "accept": "enter",
          "next": "control:n",
          "previous": "control:p",
          "docnext": "control:j",
          "docprevious": "control:k"
        },
        "savefile": "su",
        "saveall": "sU",
        "closefile": "sp",
        "closeall": "sP"
      }
    }
  },
  "dailynotes": {
    "shorten": "dn",
    "settings": {
      "path": "~/Documents/vkstorage/"
    }
  },
  "quicknotes": {
    "shorten": "qn",
    "settings": {
      "path": "~/Documents/vkstorage/"
    }
  },
  "ai": {
    "shorten": "ai",
    "settings": {
      "apikey": "ajklfs"
    }
  }
}
```
