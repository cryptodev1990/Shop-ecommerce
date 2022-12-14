import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DestroySubscription } from '@shared/helpers/destroy-subscription';
import { LocalStorageService } from '@shared/services/localStorageService/local-storage.service';
import { ThemeService } from '@shared/services/theme-service/theme.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutFooterComponent extends DestroySubscription implements OnInit, AfterViewInit {
  themeCheck: boolean;
  lang: string;
  constructor(private readonly themeService: ThemeService, private readonly localStorage: LocalStorageService) {
    super();
  }

  ngOnInit(): void {
    this.themeService.themeCheck$.pipe(takeUntil(this.destroyStream$)).subscribe(val => {
      this.themeCheck = val;
    });

    this.getPromiseList();
  }

  ngAfterViewInit(): void {
    const currentLang = localStorage.getItem('current-lang');
    if (currentLang === 'cn-TR' || currentLang === 'zh-CN') {
      this.lang = 'zh-hans';
    } else {
      this.lang = 'en';
    }
  }

  promiseList: any[] = [];

  contactList: any[] = [
    {
      icon: 'phone',
      content: 'footer-phone'
    },
    {
      icon: 'mail',
      content: 'footer-email'
    },
    {
      icon: 'environment',
      content: 'footer-address'
    }
  ];

  articleList = [
    {
      title: 'footer-title-shop',
      links: [
        {
          link: '/product/search',
          text: 'footer-start-shopping',
          external: false,
          target: ''
        },
        {
          link: '/cart',
          text: 'footer-cart',
          external: false,
          target: ''
        },
        {
          link: '/cart',
          text: 'footer-checkout',
          external: false,
          target: ''
        }
      ]
    },
    {
      title: 'footer-title-account',
      links: [
        {
          link: '/login',
          text: 'footer-login',
          external: false,
          target: ''
        },
        {
          link: '/register',
          text: 'footer-sign-up',
          external: null,
          target: ''
        },
        {
          link: '/member/order/list',
          text: 'footer-account',
          external: false,
          target: ''
        }
      ]
    },
    {
      title: 'footer-title-help',
      links: [
        {
          link: 'https://about.tyqoon.co/faq/',
          text: 'footer-help',
          external: true,
          target: '_blank'
        },
        {
          link: 'https://about.tyqoon.co/cancellation-policy/',
          text: 'footer-return-policy',
          external: true,
          target: '_blank'
        },
        {
          link: '/member/order/list',
          text: 'footer-return',
          external: false,
          target: ''
        }
      ]
    }
    // {
    //   title: '????????????',
    //   links: [
    //     {
    //       link: '/',
    //       text: '????????????'
    //     },
    //     {
    //       link: '/',
    //       text: '????????????'
    //     },
    //     {
    //       link: '/',
    //       text: '????????????'
    //     }
    //   ]
    // }
  ];

  bottomNav = [
    {
      link: `https://about.tyqoon.co`,
      text: 'footer-about',
      external: true
    },
    {
      link: `https://about.tyqoon.co/privacy-policy`,
      text: 'footer-privacy',
      external: true
    },
    {
      link: `https://about.tyqoon.co/terms-conditions`,
      text: 'footer-terms',
      external: true
    }
  ];

  getPromiseList() {
    this.promiseList = [
      {
        icon: 'tgicon-anquanbaozhang',
        name: '????????????',
        desc: '???????????? ????????????'
      },
      {
        icon: 'tgicon-wuliu',
        name: '????????????',
        desc: '???????????? ????????????'
      },
      {
        icon: 'tgicon-kefu',
        name: '????????????',
        desc: '???????????? ????????????'
      },
      {
        icon: 'tgicon-liwuhuodong',
        name: '????????????',
        desc: '???????????? ????????????'
      },
      {
        icon: 'tgicon--fuwu',
        name: '????????????',
        desc: '???????????? ????????????'
      }
    ];
  }
}
