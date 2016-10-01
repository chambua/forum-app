var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var forum_1 = require('../forum/forum');
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.forumGroups = [];
        this.getForumGroups();
    }
    HomePage.prototype.getForumGroups = function () {
        this.setToasterMessage('Hello, forum groups has been populated');
        this.forumGroups.push({
            id: 1,
            name: 'Business',
            forums: [
                {
                    id: "form_1",
                    title: "BUSINESS HAS TAKE NEW TURN IN THIRD WORLD COUNTRY?",
                    poster: 'Chambua',
                    comments: [
                        {
                            comment: "It is just minor connection",
                            commenter: "Joseph"
                        },
                        {
                            comment: "Ofcoz this hii imekuwa ni topic kubwa sasa east africa……",
                            commenter: "Leah"
                        },
                        {
                            comment: "It is just minor connection",
                            commenter: "Ester"
                        },
                        {
                            comment: "It is done",
                            commenter: "Joseph"
                        }
                    ]
                },
                {
                    id: "form_2",
                    title: "GOVERNMENT OF TANZANIA HAS BEEN ABLE TO MANAGE TO STABILIZE NATIONAL CURRENCY?",
                    poster: 'Rosemary',
                    comments: [
                        {
                            comment: "It is just minor connection",
                            commenter: "Joseph"
                        },
                        {
                            comment: "Nenda kasome makala iliyotolewa na BBC leo utapata majibu……..",
                            commenter: "Joseph"
                        }
                    ]
                },
                {
                    id: "form_3",
                    title: "What is deflation and inflation affect African continent.. I need comment please",
                    poster: 'Chingalo',
                    comments: [
                        {
                            comment: "It is just minor connection",
                            commenter: "Joseph"
                        },
                        {
                            comment: "It is done",
                            commenter: "Joseph"
                        }
                    ]
                }
            ]
        });
        this.forumGroups.push({
            id: 2,
            name: 'Information Tech',
            forums: [
                {
                    id: "form_21",
                    title: "title One",
                    poster: 'Philibert',
                    comments: [
                        {
                            comment: "It is just minor connection",
                            commenter: "Joseph"
                        },
                        {
                            comment: "It is done",
                            commenter: "Joseph"
                        },
                        {
                            comment: "Nenda kasome makala iliyotolewa na BBC leo utapata majibu……..",
                            commenter: "Joseph"
                        }
                    ]
                },
                {
                    id: "form_22",
                    title: "title two",
                    poster: 'Leah',
                    comments: [
                        {
                            comment: "It is just minor connection",
                            commenter: "Joseph"
                        },
                        {
                            comment: "It is done",
                            commenter: "Joseph"
                        }
                    ]
                }
            ]
        });
        this.forumGroups.push({
            id: 3,
            name: 'Social',
            forums: [
                {
                    id: "form_31",
                    title: "IFM ,WORLD BANK has banned to give fund to Zimbabwe ? Due to Mugabe insults …weka comment yako..",
                    poster: 'Leah',
                    comments: [
                        {
                            comment: "It is just minor connection",
                            commenter: "Joseph"
                        },
                        {
                            comment: "It is done",
                            commenter: "Joseph"
                        },
                        {
                            comment: "Nenda kasome makala iliyotolewa na BBC leo utapata majibu……..",
                            commenter: "Joseph"
                        },
                        {
                            comment: "It is awesome",
                            commenter: "Joseph"
                        },
                        {
                            comment: "It is done",
                            commenter: "Joseph"
                        }
                    ]
                },
                {
                    id: "form_32",
                    title: "title two",
                    poster: 'Leah',
                    comments: [
                        {
                            comment: "It is just minor connection",
                            commenter: "Joseph"
                        },
                        {
                            comment: "It is done",
                            commenter: "Joseph"
                        },
                        {
                            comment: "It is done",
                            commenter: "Joseph"
                        }
                    ]
                }
            ]
        });
        this.showSegment(this.forumGroups[0].id);
    };
    HomePage.prototype.goToForum = function (forum, forumGroupName) {
        var parameter = {
            forumGroupName: forumGroupName,
            forum: forum
        };
        this.navCtrl.push(forum_1.ForumPage, parameter);
    };
    HomePage.prototype.showSegment = function (currentGroupId) {
        this.currentForumGroup = "" + currentGroupId;
    };
    HomePage.prototype.setToasterMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000
        });
        toast.present();
    };
    HomePage.prototype.setStickToasterMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true
        });
        toast.present();
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.ToastController])
    ], HomePage);
    return HomePage;
})();
exports.HomePage = HomePage;
