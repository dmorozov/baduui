package elemental2.dom;
import java.lang.Void;
import elemental2.dom.ServiceWorkerClient;
import elemental2.dom.ServiceWorkerClientQueryOptions;
import java.lang.String;
import jsinterop.annotations.JsType;
import jsinterop.annotations.JsPackage;
import elemental2.promise.Promise;
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ServiceWorkerClients{
Promise<Void> claim();
Promise<ServiceWorkerClient> get(String id);
Promise<ServiceWorkerClient[]> getAll();
Promise<ServiceWorkerClient[]> getAll(ServiceWorkerClientQueryOptions options);
Promise<ServiceWorkerClient[]> matchAll();
Promise<ServiceWorkerClient[]> matchAll(ServiceWorkerClientQueryOptions options);
Promise<ServiceWorkerClient> openWindow(String url);
}
