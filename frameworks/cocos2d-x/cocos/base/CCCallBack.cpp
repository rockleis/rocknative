//
//  CCCallBack.cpp
//  cocos2d_libs
//
//  Created by rock on 2021/9/24.
//

#include "CCCallBack.hpp"

namespace cocos2d
{
    static CCCallBack * _CCCallBack = nullptr;

    CCCallBack* CCCallBack::getInstance()
    {
        if (_CCCallBack == nullptr)
        {
            _CCCallBack = new (std::nothrow) CCCallBack();
        }
        return _CCCallBack;
    }

    void CCCallBack::setDestoryCallback(destoryCallback call)
    {
        _destoryCallback = call;
    }

    destoryCallback CCCallBack::getDestoryCallback()
    {
        return _destoryCallback;
    }

    void CCCallBack::callDestoryCallback()
    {
        if(_destoryCallback != nullptr)
        {
            _destoryCallback();
            
        }
    }
}
