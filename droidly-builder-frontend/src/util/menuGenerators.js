import { screenTypes } from "../blockly/blocks/screens"
import account from '../assets/account.svg'
import add from '../assets/add.svg'
import arrowBack from '../assets/arrow-back.svg'
import article from '../assets/article.svg'
import close from '../assets/close.svg'
import deleteIcon from '../assets/delete.svg'
import done from '../assets/done.svg'
import favorite from '../assets/favorite.svg'
import home from '../assets/home.svg'
import info from '../assets/info.svg'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import search from '../assets/search.svg'
import settings from '../assets/settings.svg'
import shoppingCart from '../assets/shopping-cart.svg'
import star from '../assets/star.svg'

export const modelMenuGenerator = (block) => () => {
  const modelOptions = block.workspace.topBlocks_
    .filter(block => block.type === 'model')
    .map(block => {
      const modelName = block.getFieldValue('MODEL_NAME')
      return [modelName, modelName]
    })
  
  if (modelOptions.length !== 0 ) {
    return modelOptions
  } else {
    return [['ModelClass', 'NOT_SELECTED']]
  }
}

export const listMenuGenerator = (block) => () => {
  const modelOptions = block.workspace.topBlocks_
    .filter(block => block.type === 'model')
    .map(block => {
      const modelName = block.getFieldValue('MODEL_NAME')
      return [modelName, modelName]
    })

  return [
    ["Boolean", "Boolean"],
    ["Date", "Date"],
    ["Number", "Number"],
    ["String", "String"],
    ...modelOptions
  ]
}

export const modelPropertyMenuGenerator = (block) => () => {
  const modelName = block.getFieldValue('MODEL_NAME')
  const modelBlock = block.workspace.topBlocks_.find(block => 
    block.getFieldValue('MODEL_NAME') === modelName
  )
  
  if (modelName === 'NameOfModel' || modelBlock === undefined) {
    return [['ModelClassProperty', 'NOT_SELECTED']]
  } else {
    const properties = modelBlock.getDescendants().slice(1).map(child => {
      const property = child.getFieldValue('PROPERTY_NAME')

      return [property, property]
    })

    return [...properties]
  }
}

export const navigateMenuGenerator = (block) => () => {
  const screenOptions = block.workspace.topBlocks_
    .filter(block => screenTypes.some(type => block.type === type))
    .map(block => {
      const screenName = block.getFieldValue('SCREEN_NAME')
      return [screenName, screenName]
    })
  
  if (screenOptions.length !== 0 ) {
    return screenOptions
  } else {
    return [['SCREEN_NAME', 'NOT_SELECTED']]
  }
}

export const iconMenuGenerator = () => {
  return [
    [{'src': add, 'width': 18, 'height': 18, 'alt': 'add'}, 'Add'],
    [{'src': arrowBack, 'width': 18, 'height': 18, 'alt': 'arrow-back'}, 'ArrowBack'],
    [{'src': account, 'width': 18, 'height': 18, 'alt': 'account'}, 'AccountCircle'],
    [{'src': search, 'width': 18, 'height': 18, 'alt': 'search'}, 'Search'],
    [{'src': home, 'width': 18, 'height': 18, 'alt': 'home'}, 'Home'],
    [{'src': mail, 'width': 18, 'height': 18, 'alt': 'mail'}, 'Email'],
    [{'src': phone, 'width': 18, 'height': 18, 'alt': 'phone'}, 'Phone'],
    [{'src': settings, 'width': 18, 'height': 18, 'alt': 'settings'}, 'Settings'],
    [{'src': done, 'width': 18, 'height': 18, 'alt': 'done'}, 'Done'],
    [{'src': info, 'width': 18, 'height': 18, 'alt': 'info'}, 'Info'],
    [{'src': deleteIcon, 'width': 18, 'height': 18, 'alt': 'delete'}, 'Delete'],
    [{'src': favorite, 'width': 18, 'height': 18, 'alt': 'favorite'}, 'Favorite'],
    [{'src': article, 'width': 18, 'height': 18, 'alt': 'article'}, 'Article'],
    [{'src': star, 'width': 18, 'height': 18, 'alt': 'star'}, 'Star'],
    [{'src': close, 'width': 18, 'height': 18, 'alt': 'close'}, 'Close'],
    [{'src': shoppingCart, 'width': 18, 'height': 18, 'alt': 'shoppingCart'}, 'ShoppingCart']
  ]
}
