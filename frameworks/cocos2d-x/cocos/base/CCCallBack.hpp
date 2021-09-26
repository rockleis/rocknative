//
//  CCCallBack.hpp
//  cocos2d_libs
//
//  Created by rock on 2021/9/24.
//

#ifndef CCCallBack_hpp
#define CCCallBack_hpp
#include <functional>

namespace cocos2d {
    typedef std::function<void()> destoryCallback;

    class CCCallBack {
        private:
            destoryCallback _destoryCallback;

        public:
            CCCallBack():_destoryCallback(nullptr) {};
            static CCCallBack* getInstance();
        
        void setDestoryCallback(destoryCallback call);
        destoryCallback getDestoryCallback();
        void callDestoryCallback();
    };
}

#endif /* CCCallBack_hpp */
