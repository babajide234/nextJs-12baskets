// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

import AccountGroup from 'mdi-material-ui/AccountGroup';

// import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },    
    {
      title: 'Teams',
      icon: AccountGroup ,
      path: '/teams'
    },
    {
      title: 'Stores',
      icon: AccountGroup ,
      path: '/stores'
    },
    {
      title: 'Orders',
      icon: AccountGroup ,
      path: '/orders'
    },
    {
      title: 'Products',
      icon: AccountGroup ,
      path: '/products'
    },
    {
      title: 'Riders',
      icon: AccountGroup ,
      path: '/riders'
    }
  ]
}

export default navigation
