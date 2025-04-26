local progressActive = false
local progressCallback = nil

RegisterNUICallback('finish', function(_, cb)
    if progressActive and progressCallback then
        progressCallback(true)
    end
    progressActive = false
    SetNuiFocus(false, false)
    cb('ok')
end)

function ShowProgressbar(text, time, cb, itemImage)
    if progressActive then return end
    progressActive = true
    progressCallback = cb
    SetNuiFocus(false, false)
    local msg = {
        action = 'show',
        text = text,
        time = time
    }
    if itemImage then
        msg.itemImage = itemImage
    end
    SendNUIMessage(msg)
end

function HideProgressbar()
    SendNUIMessage({action = 'hide'})
    progressActive = false
end

exports('progressbar', ShowProgressbar)
exports('hideProgressbar', HideProgressbar)

RegisterNetEvent('infinity-progress:show')
AddEventHandler('infinity-progress:show', function(text, time, itemImage)
    ShowProgressbar(text, time, nil, itemImage)
end)

RegisterNetEvent('infinity-progress:hide')
AddEventHandler('infinity-progress:hide', function()
    HideProgressbar()
end)

RegisterNetEvent('infinity-progress:serverShow')
AddEventHandler('infinity-progress:serverShow', function(text, time, itemImage)
    ShowProgressbar(text, time, nil, itemImage)
end)

-- Comando para testar o export no client
RegisterCommand('pc', function()
    exports['infinity-progress']:progressbar('Testing client export...', 4000, function(success)
        if success then
            print('Client progress finished!')
        end
    end, '')
end) 